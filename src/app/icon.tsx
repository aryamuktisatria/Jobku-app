import { ImageResponse } from 'next/og';
import { BriefcaseBusiness } from 'lucide-react';

// Ukuran default ikon Next.js (32x32)
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0057E7', // Biru gelap
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '6px',
        }}
      >
        {/* Menggunakan ikon Lucide untuk representasi pekerjaan */}
        <BriefcaseBusiness size={20} />
      </div>
    ),
    {
      ...size,
    }
  );
}
