<?php
class ProductsController extends BaseController {
    public function listIndex() {
        $products = Products::all();
        return View::make('products', compact('products'));

    }

    public function galleryIndex() {
        $products = Products::all();
        return View::make('products_gallery', compact ('products'));
    }
}
?>