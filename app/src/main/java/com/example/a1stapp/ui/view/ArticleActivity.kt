package com.example.a1stapp.ui.view

import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.a1stapp.R
import com.squareup.picasso.Picasso

class ArticleActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_article)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        val titleView = findViewById<TextView>(R.id.title_view)
        val bodyView = findViewById<TextView>(R.id.body_view)
        val imageView = findViewById<ImageView>(R.id.image_view)

        val bundle: Bundle? = intent.extras
        titleView.text = bundle?.getString("title")
        bodyView.text = bundle?.getString("body")

        Picasso.get().load(bundle?.getString("image"))
            .placeholder(R.drawable.placeholder)
            .error(R.drawable.placeholder)
            .into(imageView)
    }
}