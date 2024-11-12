package com.example.a1stapp.data.model

data class Article(val uuid: String,
                   val title: String,
                   val description: String,
                   val images: List<Image>? = null,
                   val url: String? = null) {
    val imageUrl: String?
        get() = images?.firstOrNull()?.src
}
