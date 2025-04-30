import { default as React, ComponentPropsWithoutRef, CSSProperties } from 'react';
import { Image } from '@radix-ui/react-avatar';
export declare const Avatar: React.FC<AvatarProps>;
interface AvatarProps extends ComponentPropsWithoutRef<typeof Image> {
    className?: string;
    fallbackAvatarText?: string;
    imageAltText: string | undefined;
    imageUrl: string | undefined;
    size?: number | string;
    style?: CSSProperties;
    userName?: string;
}
export {};
