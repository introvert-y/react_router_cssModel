const baseUrlTable = {
  // local: 'http://192.168.1.171:8086',
  local: "",
  dev: "",
  pre: "",
  release: "https://labor.emodor.com"
};

export const baseUrl = baseUrlTable.local;

export default {
  baseUrl,
  uploadAction: `${baseUrl}/eobi-api/api/file/upload`
};
