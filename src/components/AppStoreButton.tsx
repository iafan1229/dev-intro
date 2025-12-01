import React from 'react';

export default function AppStoreButton() {
  return (
    <a
      href="https://apps.apple.com/us/app/%ED%97%AC%EC%8A%A4%EB%A1%9C%EA%B7%B8/id6755720337"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-6 border-1 border-gray-900 text-gray-900 rounded-lg font-medium text-base transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900"
    style={{padding:10}}>
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <span>App Store에서 다운로드</span>
    </a>
  );
}
