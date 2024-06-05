export interface ColorPalette {
	[key: string]:
		| string
		| {
				[key: string]: string;
		  };
}
