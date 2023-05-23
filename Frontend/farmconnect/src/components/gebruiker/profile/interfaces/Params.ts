import { NextPage } from 'next';

interface Params {
  slug: string;
}

/**
 * Page for adding a new post
 * @param{Params} params
 * @constructor
 */
/* @ts-expect-error Async Server Component */
export const AddPost: NextPage = async ({ params }: { params: Params }) => {
  /**
   * Load post from database
   * @param{string} id
   */
  async function loadPost() {
    if (!params.slug) {
      console.log(params);
      console.log('No id found');
      return;
    }
  }
};
