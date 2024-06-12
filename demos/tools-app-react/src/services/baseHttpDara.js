


// post 2015 way
export class BaseHttpData {


  // hashtag means private
  #baseUrl;
  #resourceName;

  constructor(baseUrl, resourceName) {
    this.#baseUrl = baseUrl;
    this.#resourceName = resourceName;
  }

  collectionUrl() {
    return `${this.#baseUrl}/${this.#resourceName}`;
  }

  memberUrl(resourceId) {
    return `${this.#baseUrl}/${this.#resourceName}/${resourceId}`;
  }

  async all() {
    // calls the rest api to fetch the colors
    const res = await fetch(this.collectionUrl());
    //deserializes the colors json text into an array of javascript color objects
    return await res.json();
  }

  // client-side code
  async append(newResource) {
    const res = await fetch(this.collectionUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newResource),

    });
    return await res.json();

  }

  async remove(resourceId) {
    await fetch(this.memberUrl(resourceId), {
      method: 'DELETE'
    });

  }


}
