import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShufflePipe } from '@ikerbede/shared';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';
import { CodeName, NBCOLORED, NBCOLUMNS, NBLINES, NBWHITES } from './code-name';

@Injectable({providedIn: 'root'})
export class CodeNamesService {
  private words$!: Observable<string[]>;
  private codeNames$!: Observable<CodeName[]>;

  constructor(
    private readonly http: HttpClient,
    private readonly shufflePipe: ShufflePipe
  ) {}

  getAllWords(force = false): Observable<string[]> {
    this.initWordsIfNeeded(force);
    return this.words$;
  }

  getCodeNames(isRedFirst: boolean, force = false) {
    if (force || !this.codeNames$) {
      this.initCodeNames(isRedFirst);
    }
    return this.codeNames$;
  }

  private initWordsIfNeeded(force = false): void {
    if (force || !this.words$) {
      this.words$ = this.http.get<{words: string[]}>(`assets/code-names-db.json`)
        .pipe(map(data => data.words), shareReplay(1));
    }
  }

  private getColors(isRedFirst: boolean): string[] {
    const whites = Array.from({length: NBWHITES}, x => 'white');
    const reds = Array.from({length: NBCOLORED}, x => 'red');
    const blues = Array.from({length: NBCOLORED}, x => 'blue');
    const colors = whites.concat([...reds]).concat([...blues]);
    colors.push('black');
    colors.push(isRedFirst ? 'red' : 'blue');
    return this.shufflePipe.transform(colors) as string[];
  }

  private initCodeNames(isRedFirst: boolean): void {
    const gridSize = NBLINES * NBCOLUMNS;
    this.codeNames$ = this.getAllWords().pipe(
      map(words => this.shufflePipe.transform(words, gridSize) as string[]),
      map(gridWords => {
        const codeNames: CodeName[] = [];
        const gridColors = this.getColors(isRedFirst);
        for (let i = 0; i < gridSize; i++) {
          codeNames.push({
            index: i,
            word: gridWords[i],
            color: gridColors[i]
          })
        }
        return codeNames;
      })
    );
  }
}
