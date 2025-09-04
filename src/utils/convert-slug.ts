export function convertSlug({slug}: {slug: string}): string {
    if (!slug) return "";

    return slug
        .replace(/-/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}