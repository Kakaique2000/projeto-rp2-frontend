import { BehaviorSubject } from 'rxjs';
export class MemoryPage<T> {

  constructor(
    private _content: T[] = [],
    public pageSize = 4,
    public currentPage = 0,
  ) { }

  private _content$ = new BehaviorSubject(this.getCurrentItens());

  get content$() {
    return this._content$.asObservable();
  }

  get totalPages() {
    return Math.floor((this._content.length - 1) / this.pageSize);
  }

  get isInLastPage() {
    return this.currentPage === this.totalPages
  }

  get isInFirstPage() {
    return this.currentPage === 0;
  }

  setContent(content: T[]) {
    this._content = content;
    this.constrainPages();
    this._content$.next(this.getCurrentItens());
  }

  constrainPages() {
    if (this.currentPage >= this.totalPages && this.currentPage > 0) {
      this.currentPage = this.totalPages-1;
    }
  }


  private getCurrentItens() {
    const start = Math.min((this.currentPage * this.pageSize), this._content.length);
    const end = Math.min((this.currentPage + 1 * this.pageSize), this._content.length);

    const contents = this._content.slice(
      start,
      end
    );
    return contents;
  }

  advancePage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this._content$.next(this.getCurrentItens())
    }
  }

  backPage() {
    if(this.currentPage > 0) {
      this.currentPage--;
      this._content$.next(this.getCurrentItens())
    }
  }

}
