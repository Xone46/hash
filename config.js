module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST:  process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER,
    JWT_SECRET : process.env.JWT_SECRET,
    NODE_ENV : process.env.NODE_ENV,
}
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  let flag = doc.includes( product.site,  product.name,  product.ref, product.price,  product.brand);
});  
if(!flag) {
    await admin.firestore().collection('Products').add({ product });
  }