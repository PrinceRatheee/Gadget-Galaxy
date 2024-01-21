import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client=createClient({
    projectId:'g62avqki',
    dataset:'production',
    apiVersion:'2023-08-12',
    useCdn:true,
});

const builder=imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source);
}