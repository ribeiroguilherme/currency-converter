type QueryString = {
  [key: string]: string | number | boolean | string[] | undefined;
};

class QueryStringBuilder {
  public static build = (parameters: QueryString): string => {

    return Object.entries(parameters)
      .filter(([, value]) => value)
      .map(
        ([key, value]) => {
          if (!value) return '';
          return `${encodeURIComponent(key)}=${encodeURIComponent(Array.isArray(value) ? value.join(',') : value)}`;
        })
      .join('&');
    }
}

export default QueryStringBuilder;
