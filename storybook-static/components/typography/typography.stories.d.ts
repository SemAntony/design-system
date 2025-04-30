import { StoryObj } from '@storybook/react';
declare const meta: {
    argTypes: {
        variant: {
            control: {
                type: string;
            };
            options: ("h2" | "h3" | "caption" | "h1" | "h4" | "overline" | "error" | "body1" | "body2" | "link1" | "link2" | "subtitle1" | "subtitle2")[];
        };
    };
    args: {
        children: string;
        variant: "body1";
    };
    component: <T extends import('react').ElementType = "p">(props: import('./typography').TypographyProps<T>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Body1: Story;
export declare const Body2: Story;
export declare const Caption: Story;
export declare const Error: Story;
export declare const H1: Story;
export declare const H2: Story;
export declare const H3: Story;
export declare const H4: Story;
export declare const Link1: Story;
export declare const Link2: Story;
export declare const Overline: Story;
export declare const Subtitle1: Story;
export declare const Subtitle2: Story;
