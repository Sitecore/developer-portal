import { ParseContent } from '@lib/markdown/mdxParse';
import { PARTIALS_DIRECTORY, REPO_URL } from '../constants';
import { ContentHeading } from './interfaces/contentheading';
import { PagePartialGroup, PagePartials, PartialData } from './interfaces/page-info';
import { Matter, getFileData } from './page-info';

export const getPartialsAsArray = async (partials: string[]): Promise<PartialData> => {
  const content: string[] = [];
  const titles: ContentHeading[] = [];
  const fileNames: string[] = [];

  await Promise.all(
    partials.map(async function (partial) {
      const data = getFileData(PARTIALS_DIRECTORY, partial) as Matter;
      const fileName = `${REPO_URL}/data/markdown/partials/${partial}.md`;
      const parsedContent = await ParseContent(Buffer.from(data.content));

      if (parsedContent != null) {
        content.push(parsedContent.result.compiledSource);
        fileNames.push(fileName);
        parsedContent.headings.map((heading) => {
          titles.push(heading);
        });
      }
    })
  );
  return {
    content,
    titles,
    fileNames,
  };
};

export const getPartialGroupsAsArray = async (partialGroups: PagePartials[]): Promise<PagePartialGroup[]> => {
  const pagePartialsGroups: PagePartialGroup[] = [];

  await Promise.all(
    partialGroups.map(async (partialGroup) => {
      const partialGroupData = {
        title: partialGroup.title,
        description: partialGroup.description ? partialGroup.description : null,
        partials: await getPartialsAsArray(partialGroup.partials),
      } as PagePartialGroup;

      pagePartialsGroups.push(partialGroupData);
    })
  );
  return pagePartialsGroups;
};
