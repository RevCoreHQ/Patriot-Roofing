import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #102a43 0%, #334e68 50%, #102a43 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#b91c1c',
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          Patriot Roofing
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#dc2626',
            marginBottom: 32,
            fontWeight: 500,
          }}
        >
          & Home Repair
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#9fb3c8',
            marginBottom: 8,
          }}
        >
          Protecting Homes with Quality Roofing & Repairs
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#627d98',
            marginTop: 16,
          }}
        >
          Lexington, NC &middot; (336) 479-6059
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
