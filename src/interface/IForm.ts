import React from 'react'

export interface IFormProps  {
	label: string;
	type:string;
	id:string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}