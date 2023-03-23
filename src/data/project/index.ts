import type { ProjectSite } from "~/types";
import sitesData from "./sites.json";

const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

let _loadProject: Promise<Array<ProjectSite>>;

async function loadProject(): Promise<Array<ProjectSite>> {
  const sites = await Promise.all(
    sitesData.map(async (site) => {
      if (!(site.image in allImages)) {
        console.error(
          `Image for "${site.title}" not found (provided: "${site.image}")`
        );
      }

      const image = await allImages[site.image];

      return {
        ...site,
        image,
      };
    })
  );

  return sites;
}

export async function getProject() {
  _loadProject = _loadProject || loadProject();
  return _loadProject;
}
