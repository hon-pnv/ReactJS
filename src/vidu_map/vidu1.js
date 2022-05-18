Iem=[];
products= [
    {
        name: "Cat hihi",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fgiannaandmara94%2Fdogs%2F&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAN",
        detail: "White cat"
    },
    {
        name: "Cat haha",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweheartit.com%2Fentry%2F352720885&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAS",
        detail: "Black cat"
    },
    {
        name: "Cat hoho",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Faww%2Fcomments%2Fmi2kkx%2Fcut_kitty_cat_with_nice_hat_hope_you_people_have%2F&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAX",
        detail: "Pink cat"
    },
    {
        name: "Cat hehe",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fmarket%2Fbear_cat_hat&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAc",
        detail: "Red cat"
    },
    {
        name: "Cat hophop",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alibaba.com%2Fproduct-detail%2FY-Z-Cute-cat-hat-pet_1600232720403.html&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAh",
        detail: "White cat"
    },
    {
        name: "Cat hhuhuuu",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftophinhanhdep.com%2Fanh-dep%2Freally-cute-cat-wallpapers%2F&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAs",
        detail: "Black cat"
    },
    {
        name: "Cat hehheh",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmetro.co.uk%2F2017%2F07%2F10%2F23-cute-kittens-to-get-you-through-a-tough-week-6760550%2F&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABAx",
        detail: "White cat"
    },
    {
        name: "Cat hiihihi",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicsart.com%2Fi%2F327111790054201&psig=AOvVaw2mK4oja_TKkA9ybCu1i9mZ&ust=1652147678136000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCg-b2m0fcCFQAAAAAdAAAAABA2",
        detail: "White cat"
    }
];
let product_name = products.map((products) => {
    return <Item products={this.state.name}></Item>
})