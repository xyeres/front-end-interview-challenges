import axios from "axios";

interface FetcherService {
  getListData(): Promise<any[]>;
  getItem(): object;
}

interface DataFetcher {
  setFetchService(f: FetcherService): void;
}

class MultiAPIFetcher implements DataFetcher {
  protected fetchService: FetcherService;

  constructor(f: FetcherService) {
    this.fetchService = f;
  }

  setFetchService(f: FetcherService): void {
    this.fetchService = f;
  }

  getListData = () => {
    return this.fetchService.getListData();
  };

  getItem = () => {
    return this.fetchService.getItem();
  };
}

// Fetcher Services

class StarWarsData implements FetcherService {
  protected baseURL: string;

  constructor(url: string) {
    this.baseURL = url;
  }

  async getListData(): Promise<any[]> {
    const url = `${this.baseURL}/people`;
    const res = await axios.get(url);
    return res.data;
  }

  getItem(): object {
    return {};
  }
}

let StarWarsFetcherService = new StarWarsData("https://swapi.dev/api/");

let dataFetcher = new MultiAPIFetcher(StarWarsFetcherService);

dataFetcher.getListData().then(console.log)

