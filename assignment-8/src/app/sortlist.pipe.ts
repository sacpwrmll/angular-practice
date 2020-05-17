import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortlist",
})
export class SortListPipe implements PipeTransform {
  transform(
    arr: Array<{
      instanceType: string;
      name: string;
      status: string;
      started: Date;
    }>
  ) {
    return arr.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}
