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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          age_range: string | null
          created_at: string
          description: string | null
          id: string
          image: string | null
          schedule: string | null
          title: string
          town: string | null
        }
        Insert: {
          age_range?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          schedule?: string | null
          title: string
          town?: string | null
        }
        Update: {
          age_range?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          schedule?: string | null
          title?: string
          town?: string | null
        }
        Relationships: []
      }
      application_documents: {
        Row: {
          application_id: string
          file_path: string
          id: string
          name: string
          uploaded_at: string
        }
        Insert: {
          application_id: string
          file_path: string
          id?: string
          name: string
          uploaded_at?: string
        }
        Update: {
          application_id?: string
          file_path?: string
          id?: string
          name?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          allergies: string | null
          autism_level: string | null
          behaviour: string | null
          child_dob: string | null
          child_first_name: string
          child_gender: string | null
          child_id: string | null
          child_id_number: string | null
          child_surname: string
          communication: string | null
          created_at: string
          diagnosis: string | null
          grade: string | null
          id: string
          medical_notes: string | null
          medication: string | null
          notes: string | null
          parent_email: string
          parent_id: string | null
          parent_name: string | null
          parent_phone: string | null
          prev_school: string | null
          school_id: string
          status: Database["public"]["Enums"]["application_status"]
          support_needs: string | null
          updated_at: string
        }
        Insert: {
          allergies?: string | null
          autism_level?: string | null
          behaviour?: string | null
          child_dob?: string | null
          child_first_name: string
          child_gender?: string | null
          child_id?: string | null
          child_id_number?: string | null
          child_surname: string
          communication?: string | null
          created_at?: string
          diagnosis?: string | null
          grade?: string | null
          id?: string
          medical_notes?: string | null
          medication?: string | null
          notes?: string | null
          parent_email: string
          parent_id?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          prev_school?: string | null
          school_id: string
          status?: Database["public"]["Enums"]["application_status"]
          support_needs?: string | null
          updated_at?: string
        }
        Update: {
          allergies?: string | null
          autism_level?: string | null
          behaviour?: string | null
          child_dob?: string | null
          child_first_name?: string
          child_gender?: string | null
          child_id?: string | null
          child_id_number?: string | null
          child_surname?: string
          communication?: string | null
          created_at?: string
          diagnosis?: string | null
          grade?: string | null
          id?: string
          medical_notes?: string | null
          medication?: string | null
          notes?: string | null
          parent_email?: string
          parent_id?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          prev_school?: string | null
          school_id?: string
          status?: Database["public"]["Enums"]["application_status"]
          support_needs?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      children: {
        Row: {
          address: string | null
          created_at: string
          dob: string | null
          first_name: string
          gender: string | null
          id: string
          id_number: string | null
          parent_id: string
          surname: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          dob?: string | null
          first_name: string
          gender?: string | null
          id?: string
          id_number?: string | null
          parent_id: string
          surname: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          dob?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          id_number?: string | null
          parent_id?: string
          surname?: string
          updated_at?: string
        }
        Relationships: []
      }
      clinics: {
        Row: {
          address: string | null
          created_at: string
          hours: string | null
          id: string
          name: string
          phone: string | null
          town: string
          type: Database["public"]["Enums"]["clinic_type"]
        }
        Insert: {
          address?: string | null
          created_at?: string
          hours?: string | null
          id?: string
          name: string
          phone?: string | null
          town: string
          type: Database["public"]["Enums"]["clinic_type"]
        }
        Update: {
          address?: string | null
          created_at?: string
          hours?: string | null
          id?: string
          name?: string
          phone?: string | null
          town?: string
          type?: Database["public"]["Enums"]["clinic_type"]
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string
          description: string | null
          id: string
          location: string | null
          starts_at: string
          title: string
          town: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          location?: string | null
          starts_at: string
          title: string
          town?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          location?: string | null
          starts_at?: string
          title?: string
          town?: string | null
        }
        Relationships: []
      }
      news: {
        Row: {
          body: string | null
          cover_image: string | null
          created_at: string
          excerpt: string | null
          id: string
          published_at: string
          slug: string
          title: string
        }
        Insert: {
          body?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string
          slug: string
          title: string
        }
        Update: {
          body?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published_at?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          link: string | null
          read: boolean
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          link?: string | null
          read?: boolean
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          link?: string | null
          read?: boolean
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          town: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          town?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          town?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      psychologists: {
        Row: {
          created_at: string
          email: string | null
          id: string
          image: string | null
          languages: string[]
          medical_aid: boolean
          name: string
          phone: string | null
          practice: string | null
          qualifications: string | null
          town: string
          updated_at: string
          years: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          image?: string | null
          languages?: string[]
          medical_aid?: boolean
          name: string
          phone?: string | null
          practice?: string | null
          qualifications?: string | null
          town: string
          updated_at?: string
          years?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          image?: string | null
          languages?: string[]
          medical_aid?: boolean
          name?: string
          phone?: string | null
          practice?: string | null
          qualifications?: string | null
          town?: string
          updated_at?: string
          years?: number | null
        }
        Relationships: []
      }
      school_documents: {
        Row: {
          created_at: string
          file_path: string
          id: string
          name: string
          school_id: string
        }
        Insert: {
          created_at?: string
          file_path: string
          id?: string
          name: string
          school_id: string
        }
        Update: {
          created_at?: string
          file_path?: string
          id?: string
          name?: string
          school_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "school_documents_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      school_facilities: {
        Row: {
          facility: string
          id: string
          school_id: string
        }
        Insert: {
          facility: string
          id?: string
          school_id: string
        }
        Update: {
          facility?: string
          id?: string
          school_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "school_facilities_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      schools: {
        Row: {
          address: string
          age_max: number
          age_min: number
          boarding: boolean
          created_at: string
          description: string | null
          email: string | null
          fees: string | null
          gender: Database["public"]["Enums"]["school_gender"]
          id: string
          image: string | null
          lat: number | null
          lng: number | null
          municipality: string
          name: string
          phone: string | null
          principal: string | null
          slug: string
          spaces: number
          town: string
          transport: boolean
          type: string | null
          updated_at: string
          vision: string | null
        }
        Insert: {
          address: string
          age_max?: number
          age_min?: number
          boarding?: boolean
          created_at?: string
          description?: string | null
          email?: string | null
          fees?: string | null
          gender?: Database["public"]["Enums"]["school_gender"]
          id?: string
          image?: string | null
          lat?: number | null
          lng?: number | null
          municipality: string
          name: string
          phone?: string | null
          principal?: string | null
          slug: string
          spaces?: number
          town: string
          transport?: boolean
          type?: string | null
          updated_at?: string
          vision?: string | null
        }
        Update: {
          address?: string
          age_max?: number
          age_min?: number
          boarding?: boolean
          created_at?: string
          description?: string | null
          email?: string | null
          fees?: string | null
          gender?: Database["public"]["Enums"]["school_gender"]
          id?: string
          image?: string | null
          lat?: number | null
          lng?: number | null
          municipality?: string
          name?: string
          phone?: string | null
          principal?: string | null
          slug?: string
          spaces?: number
          town?: string
          transport?: boolean
          type?: string | null
          updated_at?: string
          vision?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          school_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      volunteers: {
        Row: {
          availability: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          interests: string[]
          occupation: string | null
          phone: string | null
          police_clearance: boolean
          skills: string | null
          town: string | null
          updated_at: string
          user_id: string | null
          years: number | null
        }
        Insert: {
          availability?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          interests?: string[]
          occupation?: string | null
          phone?: string | null
          police_clearance?: boolean
          skills?: string | null
          town?: string | null
          updated_at?: string
          user_id?: string | null
          years?: number | null
        }
        Update: {
          availability?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          interests?: string[]
          occupation?: string | null
          phone?: string | null
          police_clearance?: boolean
          skills?: string | null
          town?: string | null
          updated_at?: string
          user_id?: string | null
          years?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_school_admin: {
        Args: { _school_id: string; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "school" | "parent" | "volunteer"
      application_status:
        | "submitted"
        | "under_review"
        | "documents_required"
        | "interview_scheduled"
        | "accepted"
        | "waitlisted"
        | "rejected"
        | "withdrawn"
      clinic_type: "Government" | "Private" | "Emergency" | "Mental Health"
      school_gender: "Mixed" | "Boys" | "Girls"
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
    Enums: {
      app_role: ["admin", "school", "parent", "volunteer"],
      application_status: [
        "submitted",
        "under_review",
        "documents_required",
        "interview_scheduled",
        "accepted",
        "waitlisted",
        "rejected",
        "withdrawn",
      ],
      clinic_type: ["Government", "Private", "Emergency", "Mental Health"],
      school_gender: ["Mixed", "Boys", "Girls"],
    },
  },
} as const
