// utils/color.ts

export function isColorDark(color: string): boolean {
    let r = 0, g = 0, b = 0;

    if (color.startsWith("#")) {
        const hex = color.replace("#", "");

        if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        }
    }

    if (color.startsWith("rgba")) {
        const values = color
            .replace("rgba(", "")
            .replace(")", "")
            .split(",")
            .map(v => parseFloat(v.trim()));

        [r, g, b] = values;
    }

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

    return luminance < 128;
}