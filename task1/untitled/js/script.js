var Ads = [
    {
        id: '1',
        country: 'CAN',
        createdAt: new Date(2014, 11, 1, 2, 3, 4, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
    {
        id: '2',
        country: 'USA',
        createdAt: new Date(2014, 2, 12, 2, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Sailor'
    },
    {
        id: '3',
        country: 'UK',
        createdAt: new Date(2014, 2, 1, 22, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
    {
        id: '4',
        country: 'RU',
        createdAt: new Date(2014, 2, 1, 2, 31, 4, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Sailor'
    },
    {
        id: '5',
        country: 'RU',
        createdAt: new Date(2014, 2, 1, 2, 3, 24, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
    {
        id: '6',
        country: 'USA',
        createdAt: new Date(2015, 2, 1, 2, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Analyst'
    },
    {
        id: '7',
        country: 'CAN',
        createdAt: new Date(2017, 2, 11, 2, 3, 4, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Sailor'
    },
    {
        id: '8',
        country: 'CAN',
        createdAt: new Date(2010, 2, 1, 2, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
    {
        id: '9',
        country: 'UK',
        createdAt: new Date(2014, 7, 1, 2, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Analyst'
    },
    {
        id: '10',
        country: 'JAP',
        createdAt: new Date(2014, 7, 14, 2, 3, 4, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
    {
        id: '11',
        country: 'FR',
        createdAt: new Date(2019, 2, 1, 21, 3, 4, 567),
        author: 'John Smith',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Analyst'
    },
    {
        id: '12',
        country: 'UK',
        createdAt: new Date(2018, 2, 11, 2, 3, 4, 567),
        author: 'Ivanov Ivan',
        photoLink: 'http://fpmi.bsu.by/ImgFpmi/Cache/banner_61403.jpg',
        work: 'Dry-dock work'
    },
]

class Service {

    Posts = new Set();

    constructor(someAds) {
        this.Posts = someAds;
    }

    getPosts(filterConfig = "Date", skip = 0, top = this.Posts.length) {
        if (filterConfig === "Date") {
            this.Posts.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return this.Posts.slice(skip, top + skip);
        }
        else if (filterConfig === "Analyst") {
            var temp = []
            this.Posts.forEach((product, ind) => {
                if (product.work === "Analyst"){
                    temp.push(product)
                }
            });
            return temp;
        }
        else if (filterConfig === "Dry-dock work") {
            var temp = []
            this.Posts.forEach((product, ind) => {
                if (product.work === "Dry-dock work"){
                    temp.push(product)
                }
            });
            return temp;
        }
        else if (filterConfig === "Sailor") {
            var temp = []
            this.Posts.forEach((product, ind) => {
                if (product.work === "Sailor"){
                    temp.push(product)
                }
            });
            return temp;
        }
        else {
            throw "Error. there is no such filter";
        }
    }

    getPost(id){
        for(let i = 0; i < Ads.length; i++)
        {
            if(id === Ads[i].id) return Ads[i];
        }
    }

    validPost(obj)
    {
        return obj.id != null && obj.country!=null && obj.author!=null && obj.createdAt!= null;
    }

    addPost(obj)
    {
        if(this.validPost(obj))
        {
            Ads.push(obj);
            return true;
        }
        else return false;
    }

    addAll(ads)
    {
        let res = new Set()
        for(let i = 0, k = 0; i < ads.length; i++)
        {
            if(this.validPost(ads[i])) {
                this.addPost(ads[i]);
            }
            else res.add(ads[k++]);
        }
    }

    editPost(id, post){
        if(this.validPost(post)){
            if(post.country !== null) this.getPost(id).country=post.country;
            if(post.author !== null) this.getPost(id).author=post.author;
            if(post.createdAt !== null) this.getPost(id).createdAt=post.createdAt;
            return true;
        }else {
            return false;
        }
    }

    removePost(id)
    {
        for(let i = 0; i < Ads.length; i++)
        {
            if(Ads[i].id === id)
            {
                return Ads.splice(i ,1);
            }
        }
         throw "Can't find the post with id = " + id;
    }
}


let a=new Service(Ads);

console.log(a.getPosts("Analyst"));
console.log(a.getPosts("Sailor"));
console.log(a.getPosts("Dry-dock work"));
console.log(a.getPosts("Date"));

let ob={
    id:'13',
    country: 'BEL',
    createdAt: new Date( 2020, 1, 2, 3, 4, 567,23),
    author: 'Я сам',
}

var posts = [
    {
        id: '24',
        country: 'USA',
        createdAt: new Date(2021, 1, 1, 2, 3, 4, 567),
        author: 'Тёма',
    },
    {
        id: '22',
        country: 'UK',
        createdAt: new Date(2004, 1, 1, 2, 3, 4, 567),
        author: 'Олег',
    }]
