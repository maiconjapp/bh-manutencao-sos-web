export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      affiliate_performance: {
        Row: {
          article_id: string | null
          click_date: string | null
          clicks: number | null
          commission_earned: number | null
          conversion_date: string | null
          conversions: number | null
          created_at: string
          id: string
          product_id: string | null
          referrer: string | null
          user_agent: string | null
        }
        Insert: {
          article_id?: string | null
          click_date?: string | null
          clicks?: number | null
          commission_earned?: number | null
          conversion_date?: string | null
          conversions?: number | null
          created_at?: string
          id?: string
          product_id?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Update: {
          article_id?: string | null
          click_date?: string | null
          clicks?: number | null
          commission_earned?: number | null
          conversion_date?: string | null
          conversions?: number | null
          created_at?: string
          id?: string
          product_id?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_performance_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "product_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_performance_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopee_products"
            referencedColumns: ["id"]
          },
        ]
      }
      article_views: {
        Row: {
          article_id: string
          created_at: string
          id: string
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "article_views_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          contact_whatsapp: string | null
          content: string
          created_at: string
          excerpt: string | null
          id: string
          keywords: string[] | null
          main_keyword: string | null
          meta_description: string | null
          slug: string
          target_site_url: string | null
          title: string
          total_views: number | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          id?: string
          keywords?: string[] | null
          main_keyword?: string | null
          meta_description?: string | null
          slug: string
          target_site_url?: string | null
          title: string
          total_views?: number | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contact_whatsapp?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          id?: string
          keywords?: string[] | null
          main_keyword?: string | null
          meta_description?: string | null
          slug?: string
          target_site_url?: string | null
          title?: string
          total_views?: number | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      automation_logs: {
        Row: {
          created_at: string
          data: Json | null
          execution_time_ms: number | null
          id: string
          message: string
          process_type: string
          status: string | null
        }
        Insert: {
          created_at?: string
          data?: Json | null
          execution_time_ms?: number | null
          id?: string
          message: string
          process_type: string
          status?: string | null
        }
        Update: {
          created_at?: string
          data?: Json | null
          execution_time_ms?: number | null
          id?: string
          message?: string
          process_type?: string
          status?: string | null
        }
        Relationships: []
      }
      automation_schedule: {
        Row: {
          created_at: string
          cron_expression: string
          error_count: number | null
          execution_count: number | null
          function_name: string
          id: string
          is_active: boolean
          job_name: string
          last_executed_at: string | null
          next_execution_at: string | null
          success_count: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          cron_expression?: string
          error_count?: number | null
          execution_count?: number | null
          function_name: string
          id?: string
          is_active?: boolean
          job_name: string
          last_executed_at?: string | null
          next_execution_at?: string | null
          success_count?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          cron_expression?: string
          error_count?: number | null
          execution_count?: number | null
          function_name?: string
          id?: string
          is_active?: boolean
          job_name?: string
          last_executed_at?: string | null
          next_execution_at?: string | null
          success_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      blog_monitors: {
        Row: {
          check_frequency_hours: number
          created_at: string
          id: string
          is_active: boolean
          last_checked_at: string | null
          last_post_date: string | null
          monitor_url: string
          name: string
          rss_feed_url: string | null
          updated_at: string
        }
        Insert: {
          check_frequency_hours?: number
          created_at?: string
          id?: string
          is_active?: boolean
          last_checked_at?: string | null
          last_post_date?: string | null
          monitor_url: string
          name: string
          rss_feed_url?: string | null
          updated_at?: string
        }
        Update: {
          check_frequency_hours?: number
          created_at?: string
          id?: string
          is_active?: boolean
          last_checked_at?: string | null
          last_post_date?: string | null
          monitor_url?: string
          name?: string
          rss_feed_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          is_generated_by_ai: boolean | null
          meta_description: string | null
          meta_keywords: string[] | null
          neighborhood: string | null
          published_at: string | null
          seo_score: number | null
          service_type: string | null
          slug: string
          source_keywords: string[] | null
          status: string | null
          target_audience: string | null
          title: string
          updated_at: string | null
          views_count: number | null
        }
        Insert: {
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_generated_by_ai?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          neighborhood?: string | null
          published_at?: string | null
          seo_score?: number | null
          service_type?: string | null
          slug: string
          source_keywords?: string[] | null
          status?: string | null
          target_audience?: string | null
          title: string
          updated_at?: string | null
          views_count?: number | null
        }
        Update: {
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_generated_by_ai?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          neighborhood?: string | null
          published_at?: string | null
          seo_score?: number | null
          service_type?: string | null
          slug?: string
          source_keywords?: string[] | null
          status?: string | null
          target_audience?: string | null
          title?: string
          updated_at?: string | null
          views_count?: number | null
        }
        Relationships: []
      }
      content_generator_config: {
        Row: {
          auto_publish: boolean | null
          content_generation_enabled: boolean | null
          content_template: string | null
          created_at: string | null
          daily_post_limit: number | null
          gemini_api_key_encrypted: string | null
          id: string
          min_keyword_volume: number | null
          seo_focus_enabled: boolean | null
          target_neighborhoods: string[] | null
          target_services: string[] | null
          updated_at: string | null
        }
        Insert: {
          auto_publish?: boolean | null
          content_generation_enabled?: boolean | null
          content_template?: string | null
          created_at?: string | null
          daily_post_limit?: number | null
          gemini_api_key_encrypted?: string | null
          id?: string
          min_keyword_volume?: number | null
          seo_focus_enabled?: boolean | null
          target_neighborhoods?: string[] | null
          target_services?: string[] | null
          updated_at?: string | null
        }
        Update: {
          auto_publish?: boolean | null
          content_generation_enabled?: boolean | null
          content_template?: string | null
          created_at?: string | null
          daily_post_limit?: number | null
          gemini_api_key_encrypted?: string | null
          id?: string
          min_keyword_volume?: number | null
          seo_focus_enabled?: boolean | null
          target_neighborhoods?: string[] | null
          target_services?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      homepage_offers: {
        Row: {
          button_text: string | null
          clicks_count: number | null
          created_at: string
          description: string | null
          end_date: string | null
          featured_image: string | null
          id: string
          is_active: boolean | null
          position_order: number | null
          product_link: string | null
          start_date: string | null
          title: string
          updated_at: string
        }
        Insert: {
          button_text?: string | null
          clicks_count?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          featured_image?: string | null
          id?: string
          is_active?: boolean | null
          position_order?: number | null
          product_link?: string | null
          start_date?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          button_text?: string | null
          clicks_count?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          featured_image?: string | null
          id?: string
          is_active?: boolean | null
          position_order?: number | null
          product_link?: string | null
          start_date?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      keyword_analysis: {
        Row: {
          competition_score: number | null
          created_at: string | null
          difficulty_score: number | null
          id: string
          is_active: boolean | null
          keyword: string
          last_analyzed: string | null
          monthly_searches: number | null
          related_neighborhoods: string[] | null
          related_services: string[] | null
          search_volume: number | null
          trend_score: number | null
        }
        Insert: {
          competition_score?: number | null
          created_at?: string | null
          difficulty_score?: number | null
          id?: string
          is_active?: boolean | null
          keyword: string
          last_analyzed?: string | null
          monthly_searches?: number | null
          related_neighborhoods?: string[] | null
          related_services?: string[] | null
          search_volume?: number | null
          trend_score?: number | null
        }
        Update: {
          competition_score?: number | null
          created_at?: string | null
          difficulty_score?: number | null
          id?: string
          is_active?: boolean | null
          keyword?: string
          last_analyzed?: string | null
          monthly_searches?: number | null
          related_neighborhoods?: string[] | null
          related_services?: string[] | null
          search_volume?: number | null
          trend_score?: number | null
        }
        Relationships: []
      }
      monitored_posts: {
        Row: {
          article_generated: boolean
          blog_monitor_id: string | null
          created_at: string
          detected_at: string
          generated_article_id: string | null
          id: string
          original_content: string | null
          original_title: string
          original_url: string
        }
        Insert: {
          article_generated?: boolean
          blog_monitor_id?: string | null
          created_at?: string
          detected_at?: string
          generated_article_id?: string | null
          id?: string
          original_content?: string | null
          original_title: string
          original_url: string
        }
        Update: {
          article_generated?: boolean
          blog_monitor_id?: string | null
          created_at?: string
          detected_at?: string
          generated_article_id?: string | null
          id?: string
          original_content?: string | null
          original_title?: string
          original_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "monitored_posts_blog_monitor_id_fkey"
            columns: ["blog_monitor_id"]
            isOneToOne: false
            referencedRelation: "blog_monitors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "monitored_posts_generated_article_id_fkey"
            columns: ["generated_article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      product_articles: {
        Row: {
          clicks_count: number | null
          content: string
          conversion_rate: number | null
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          meta_keywords: string[] | null
          product_id: string | null
          published_at: string | null
          slug: string
          target_keywords: string[] | null
          title: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          clicks_count?: number | null
          content: string
          conversion_rate?: number | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          product_id?: string | null
          published_at?: string | null
          slug: string
          target_keywords?: string[] | null
          title: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          clicks_count?: number | null
          content?: string
          conversion_rate?: number | null
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          product_id?: string | null
          published_at?: string | null
          slug?: string
          target_keywords?: string[] | null
          title?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_articles_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "shopee_products"
            referencedColumns: ["id"]
          },
        ]
      }
      shopee_automation_config: {
        Row: {
          affiliate_id: string
          automation_enabled: boolean
          created_at: string
          id: string
          keyword_min_search_volume: number
          max_articles_per_day: number
          min_discount_percentage: number
          target_categories: string[]
          updated_at: string
        }
        Insert: {
          affiliate_id?: string
          automation_enabled?: boolean
          created_at?: string
          id?: string
          keyword_min_search_volume?: number
          max_articles_per_day?: number
          min_discount_percentage?: number
          target_categories?: string[]
          updated_at?: string
        }
        Update: {
          affiliate_id?: string
          automation_enabled?: boolean
          created_at?: string
          id?: string
          keyword_min_search_volume?: number
          max_articles_per_day?: number
          min_discount_percentage?: number
          target_categories?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      shopee_products: {
        Row: {
          affiliate_link: string
          brand: string | null
          category: string | null
          created_at: string
          description: string | null
          discount_percentage: number | null
          featured_image: string | null
          id: string
          images: string[] | null
          is_active: boolean | null
          is_trending: boolean | null
          last_updated: string | null
          original_price: number
          rating: number | null
          review_count: number | null
          sale_price: number
          shop_name: string | null
          shop_url: string | null
          shopee_id: string
          slug: string
          sold_count: number | null
          subcategory: string | null
          title: string
        }
        Insert: {
          affiliate_link: string
          brand?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          featured_image?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_trending?: boolean | null
          last_updated?: string | null
          original_price: number
          rating?: number | null
          review_count?: number | null
          sale_price: number
          shop_name?: string | null
          shop_url?: string | null
          shopee_id: string
          slug: string
          sold_count?: number | null
          subcategory?: string | null
          title: string
        }
        Update: {
          affiliate_link?: string
          brand?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          featured_image?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean | null
          is_trending?: boolean | null
          last_updated?: string | null
          original_price?: number
          rating?: number | null
          review_count?: number | null
          sale_price?: number
          shop_name?: string | null
          shop_url?: string | null
          shopee_id?: string
          slug?: string
          sold_count?: number | null
          subcategory?: string | null
          title?: string
        }
        Relationships: []
      }
      sitemap_urls: {
        Row: {
          change_frequency: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          last_modified: string | null
          metadata: Json | null
          priority: number | null
          url: string
          url_type: string
        }
        Insert: {
          change_frequency?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_modified?: string | null
          metadata?: Json | null
          priority?: number | null
          url: string
          url_type: string
        }
        Update: {
          change_frequency?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          last_modified?: string | null
          metadata?: Json | null
          priority?: number | null
          url?: string
          url_type?: string
        }
        Relationships: []
      }
      trending_keywords: {
        Row: {
          competition_level: string | null
          country_code: string | null
          created_at: string
          id: string
          is_active: boolean | null
          keyword: string
          last_analyzed: string | null
          related_products: string[] | null
          search_volume: number | null
          trend_score: number | null
        }
        Insert: {
          competition_level?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          keyword: string
          last_analyzed?: string | null
          related_products?: string[] | null
          search_volume?: number | null
          trend_score?: number | null
        }
        Update: {
          competition_level?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          keyword?: string
          last_analyzed?: string | null
          related_products?: string[] | null
          search_volume?: number | null
          trend_score?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: { Args: { title: string }; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
