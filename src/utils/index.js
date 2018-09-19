export function normalize(data, name, typeId = 'id') {
  let items = {};
  let itemsById = data.map((d) => {
    items[d[typeId]] = d;
    return d[typeId];
  });

  return {
    [`${name}s`]: items,
    [`${name}sByName`]: itemsById
  };
}

export const unNormalize = (data) =>
  Object.keys(data).map((id) => data[id]);

export const slugify = (text) =>
  text.replace(/\s+/g, '-').trim();

export const reslugify = (text) =>
  text.replace(/-+/g, ' ').trim();
