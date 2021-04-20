import * as FileSaver from "file-saver";

export function downloadFile(res :Blob ,filename: string) {
  let DATE = new Date();
  let date = DATE.getHours()+'_'+DATE.getMinutes()+'_'+DATE.getSeconds();
  filename = filename+`_${date}`
  const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const file = new File([blob], filename+'.xlsx', {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  FileSaver.saveAs(file);
}
