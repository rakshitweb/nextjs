'use client';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export const GoBackButton = ({
  renderElement,
}: {
  renderElement?: ReactNode;
}) => {
  const router = useRouter();
  return (
    <a className="link" onClick={router.back}>
      {renderElement || 'Go Back'}
    </a>
  );
};
