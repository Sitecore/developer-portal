import { ChangelogEntry, ChangelogEntryList, ParseRawData } from '../types/changeLogEntry';
import { Search } from './search-lib';

/**
 * Create a new request to the GraphQL endpoint
 * @param returnSummaries when true return ChangelogEntrySummary
 * @param limit number of returned results
 */
export class ChangelogRequest {
  private _productId?: string;
  private _changeTypeId?: string;
  private _summary?: boolean;
  private _searchTerm?: string;
  returnSummaries?: boolean;
  limit?: number;

  /**
   * Create a new changelog request
   * @param productId entityId for the product
   * @param changeTypeId entityId for the changeType
   * @param searchTerm searchterm for title
   */
  constructor(productId?: string, changeTypeId?: string, searchTerm?: string) {
    this._productId = productId;
    this._changeTypeId = changeTypeId;
    this._searchTerm = searchTerm;
  }

  /**
   * Takes two numbers and returns their sum
   */
  async getResults(): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const results = await Search(this._productId, this._changeTypeId, this._summary, this._searchTerm);
    return ParseRawData(results);
  }
}

//const xxx = new ChangelogRequest('xx', 'xx');
//xxx.returnSummaries = true;
//xxx.getResults();
