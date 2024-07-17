import {TouchableOpacity, View, Text} from "react-native";
import { Category, Transaction } from "../types";
import TransactionsListItem from "./TransactionsListItem";


export default function TransactionList({
    transactions,
    categories,
    deleteTransaction,
}: {
    categories: Category[];
    transactions: Transaction[];
    deleteTransaction: (id: number) => Promise<void>;

}) {
    return(
        <View style={{gap:2}}>
            {transactions.map((transaction)=>{
               const categoryForCurrentItem = categories.find(
                (category) => category.id === transaction.category_id
               )

                return(
                    <TouchableOpacity
                    key={transaction.id}
                    activeOpacity={.7}
                    onLongPress={()=>deleteTransaction(transaction.id)}
                    >
                        <TransactionsListItem transaction={transaction} 
                        categoryInfe={categoryForCurrentItem}/>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}