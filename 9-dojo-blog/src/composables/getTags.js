export default (posts) => new Set(posts.map(post => post.tags).flat());