import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    return {
        post: {title: `Hotel ${params.id}`, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget metus sem. Duis vitae ornare est. Sed eu lacus sollicitudin, ullamcorper sapien nec, lobortis sem. Donec ut pharetra est, vel facilisis odio. Vivamus semper orci sed elit interdum auctor. Nulla facilisi. Pellentesque sagittis non sem ac vestibulum. Integer elementum facilisis elit, vel ullamcorper ligula rhoncus ac. Cras leo lacus, tempor non fermentum a, bibendum eget turpis. ", id: params.id}
    };
}) satisfies PageServerLoad;