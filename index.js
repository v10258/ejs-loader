import { getOptions, parseQuery } from 'loader-utils'
import ejs from 'ejs'

export default function loader(source) {
  this.cacheable && this.cacheable();
  const query = parseQuery(this.query);
  const options = getOptions(this);

  let template = ejs.compile(source, Object.assign({}, query, options))

  return `export default  ${template}`;
};