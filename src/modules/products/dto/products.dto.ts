export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly imageURL: string;
  readonly availability: boolean;
  readonly categories: string[];
}
