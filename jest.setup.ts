import '@testing-library/jest-dom';

// Next.js特有の設定など
process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        domains: ['images.example.com'],
        path: '/_next/image',
        loader: 'default',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
};
