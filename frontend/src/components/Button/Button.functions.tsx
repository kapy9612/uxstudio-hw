import { useRouter } from 'next/router';

enum LinkType {
    INSIDE,
    OUTSIDE,
}

const linkRegex =
    /^(?:https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
const decideInOrOutside = (link: string) => {
    if (linkRegex.test(link)) {
        return LinkType.OUTSIDE;
    } else {
        return LinkType.INSIDE;
    }
};
export function navigateToLink(link: string) {
    const router = useRouter();
    if (link) {
        const linkType = decideInOrOutside(link);
        switch (linkType) {
            case LinkType.INSIDE:
                return () => router.push(link);
            case LinkType.OUTSIDE:
                return () => window.open(link);
        }
    } else {
        return () => console.log('No link provided');
    }
}
