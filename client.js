import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_APP_SANITY_STUDIO_API_PROJECT_ID,
  dataset: "production",
});
