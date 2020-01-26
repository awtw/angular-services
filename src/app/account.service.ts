import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	accounts = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Testaccount',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];
	constructor() {}

	addAccount(name: string, status: string) {
		this.accounts.push({ name: name, status: status });
		console.log(this.accounts);
	}

	updateAccount(id: number, status: string) {
		this.accounts[id].status = status;
		console.log(this.accounts);
	}
}
