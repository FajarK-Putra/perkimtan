# Fitur Download Lampiran Pengumuman

## 📋 Deskripsi

Fitur ini memungkinkan pengguna untuk mengunduh file lampiran dari pengumuman. Saat ini menggunakan data dummy, namun sudah siap untuk integrasi dengan API backend.

## 🎯 Komponen yang Dibuat

### 1. **DownloadButton** (`src/components/atoms/DownloadButton.tsx`)
Komponen button untuk mengunduh file lampiran dengan fitur:
- ✅ Loading state dengan spinner animation
- ✅ Disabled state saat sedang download
- ✅ Toast notification untuk feedback user
- ✅ Support untuk URL file dari API (siap integrasi)
- ✅ Fallback untuk data dummy

### 2. **Toast** (`src/components/atoms/Toast.tsx`)
Komponen notifikasi modern dengan fitur:
- ✅ 3 tipe: info, success, error
- ✅ Auto-hide dengan durasi yang dapat dikonfigurasi
- ✅ Smooth animation (fade in/out & slide)
- ✅ Tombol close manual
- ✅ Icon yang sesuai dengan tipe notifikasi

## 🔧 Cara Penggunaan

### Penggunaan Saat Ini (Dummy Data)

```tsx
import DownloadButton from '@/components/atoms/DownloadButton'

<DownloadButton fileName="dokumen.pdf" />
```

Ketika tombol diklik, akan menampilkan toast notification:
- **Info**: "Download [nama file] - Fitur ini akan aktif saat terintegrasi dengan API"
- Loading state selama 1.5 detik (simulasi)

### Penggunaan Setelah Integrasi API

```tsx
import DownloadButton from '@/components/atoms/DownloadButton'

<DownloadButton 
  fileName="pengumuman_rekrutmen_2024.pdf"
  fileUrl="https://api.perkimtan.go.id/files/pengumuman_rekrutmen_2024.pdf"
/>
```

Dengan `fileUrl`, komponen akan:
1. Fetch file dari URL
2. Tampilkan loading state
3. Download file secara otomatis
4. Tampilkan toast success

## 📝 Struktur Data untuk API

Update struktur data pengumuman di API dengan menambahkan field `fileUrl`:

```typescript
interface Pengumuman {
  id: number
  judul: string
  tanggal: string  // ISO format: "2024-01-20"
  kategori: "Kepegawaian" | "Program" | "Regulasi" | "Pertanahan" | "Teknis" | "Umum"
  tipe: "Penting" | "Info"
  lampiran: string | null  // Nama file
  fileUrl?: string | null  // URL untuk download file (tambahkan ini)
  ringkasan: string
  isi: string  // HTML content
}
```

## 🚀 Implementasi API

### Backend (Contoh dengan Express.js)

```javascript
// Route untuk download file
app.get('/api/files/:filename', async (req, res) => {
  try {
    const filename = req.params.filename
    const filePath = path.join(__dirname, 'uploads', filename)
    
    // Set headers
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.setHeader('Content-Type', 'application/pdf')
    
    // Stream file
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  } catch (error) {
    res.status(404).json({ error: 'File not found' })
  }
})

// Route untuk get pengumuman
app.get('/api/pengumuman/:id', async (req, res) => {
  const pengumuman = await db.getPengumumanById(req.params.id)
  
  // Tambahkan fileUrl jika ada lampiran
  if (pengumuman.lampiran) {
    pengumuman.fileUrl = `${process.env.API_URL}/api/files/${pengumuman.lampiran}`
  }
  
  res.json(pengumuman)
})
```

### Frontend (Update Fetch Data)

```typescript
// src/app/pengumuman/[id]/page.tsx

// Ganti dari:
import { pengumumanList } from '@/lib/data'
const pengumuman = pengumumanList.find(item => item.id === parseInt(params.id))

// Menjadi:
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pengumuman/${params.id}`)
const pengumuman = await response.json()

// Lalu pass fileUrl ke DownloadButton
<DownloadButton 
  fileName={pengumuman.lampiran} 
  fileUrl={pengumuman.fileUrl}  // <- URL dari API
/>
```

## 🎨 Features

### Loading State
```tsx
{isDownloading ? (
  <>
    <svg className="animate-spin">...</svg>
    <span>Mengunduh...</span>
  </>
) : (
  <>
    <svg>...</svg>
    <span>Unduh</span>
  </>
)}
```

### Toast Notifications

#### Info (Dummy)
```typescript
setToast({
  message: 'Download "[filename]" - Fitur ini akan aktif saat terintegrasi dengan API',
  type: 'info'
})
```

#### Success (Real Download)
```typescript
setToast({
  message: 'File "[filename]" berhasil diunduh!',
  type: 'success'
})
```

#### Error
```typescript
setToast({
  message: 'Terjadi kesalahan saat mengunduh file',
  type: 'error'
})
```

## 🔐 Security Considerations

Ketika mengimplementasi di production:

1. **File Validation**: Validasi tipe file dan ukuran di backend
2. **Authentication**: Tambahkan auth token untuk endpoint download
3. **Rate Limiting**: Batasi jumlah download per user
4. **Virus Scanning**: Scan file sebelum disimpan
5. **Secure Storage**: Gunakan cloud storage (S3, GCS) dengan signed URLs

## 📱 Responsive Design

- Desktop: Button full dengan text "Unduh"
- Mobile: Button dengan icon saja (opsional)
- Toast: Posisi bottom-right, adjust untuk mobile

## ♿ Accessibility

- ✅ Button memiliki disabled state
- ✅ Loading indicator dengan animation
- ✅ Toast dapat ditutup dengan keyboard (ESC)
- ✅ Semantic HTML dengan proper ARIA labels

## 🧪 Testing

```typescript
// Test cases untuk DownloadButton
describe('DownloadButton', () => {
  it('should show loading state when downloading', () => {})
  it('should download file when fileUrl is provided', () => {})
  it('should show info toast when fileUrl is not provided', () => {})
  it('should show error toast on download failure', () => {})
  it('should disable button during download', () => {})
})
```

## 📄 Lisensi

MIT License - Dinas Perkimtan Sumbar © 2024
