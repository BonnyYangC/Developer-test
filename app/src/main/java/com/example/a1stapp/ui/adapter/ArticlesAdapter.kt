package com.example.a1stapp.ui.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.a1stapp.R
import com.example.a1stapp.data.model.Article
import com.squareup.picasso.Picasso

class ArticlesAdapter(private val listener: OnItemClickListener?, var articles: List<Article>? = null): RecyclerView.Adapter<ArticlesAdapter.ArticleViewHolder>() {

    interface OnItemClickListener {
        fun onItemClick(article: Article?)
    }

    class ArticleViewHolder(itemView: View): RecyclerView.ViewHolder (itemView){
        private val titleView: TextView = itemView.findViewById(R.id.row_article_title)
        private val imageView: ImageView = itemView.findViewById(R.id.row_article_image)

        fun bindView(article: Article, listener: OnItemClickListener?) {
            titleView.text = article.title

            Picasso.get().load(article.imageUrl)
                .placeholder(R.drawable.placeholder)
                .error(R.drawable.placeholder)
                .into(imageView)

            itemView.setOnClickListener {
                listener?.onItemClick(article)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ArticleViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.card_article, parent, false)
        return ArticleViewHolder(view)
    }

    override fun onBindViewHolder(holder: ArticleViewHolder, position: Int) {
        articles?.get(position)?.let {
            holder.bindView(it, listener)
        }
    }

    override fun getItemCount(): Int {
        return articles?.size ?: 0
    }
}
