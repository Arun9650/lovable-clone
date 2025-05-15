'use client';
import Sidebar from '@/components/Sidebar';
import PreviewPanel from '@/components/Preview';

export default function HomePage() {
  return (
    <div className="flex h-screen">
      {/* Left: Sidebar */}
      <Sidebar />

      {/* Right: Preview */}
      <PreviewPanel />
    </div>
  );
}
