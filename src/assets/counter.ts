import { ref, computed } from 'vue';
import { defineStore } from 'pinia'
 
export const useDataStore = defineStore('data', {
    state() {
        return {
            dataLst: [
                {
                    id: 1,
                    imgUrl: 'imgs/1.png',
                    title: '联想电脑小新版',
                    price: '2526.00',
                    num: 0
                },
                {
                    id: 2,
                    imgUrl: 'imgs/2.png',
                    title: '苹果电脑小新版',
                    price: '9652.00',
                    num: 0
                },
                {
                    id: 3,
                    imgUrl: 'imgs/3.png',
                    title: '华为电脑畅想版',
                    price: '6580.00',
                    num: 0
                },
                {
                    id: 4,
                    imgUrl: 'imgs/4.png',
                    title: '荣耀电脑',
                    price: '3620.00',
                    num: 0
                }
            ],
            dataL: [],
            totalNum: 0
        }
    },
    getters: {
 
    },
    actions: {
        dataLists() {
            this.dataL = this.dataLst
            console.log(this.dataL);
        },
        changeData(row) {
            console.log(row, '123');
            this.dataL.map(i => {
                if (i.id == row.id) {
                    i.num = row.num
                }
            })
            this.buyNum(row)
        },
        buyNum(row){
            this.dataL.map(i => {
                if(i.id == row.id){
                    this.totalNum += 1
                }
            })
            // this.dataL.map(i=>{
            //     this.totalNum += i.num
            // })
        }
    }
})
 