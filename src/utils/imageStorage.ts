
import { supabase } from '@/integrations/supabase/client';

export const uploadImage = async (file: File, bucket: string, userId: string) => {
  if (!file || !userId) return null;

  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `${fileName}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  } catch (error) {
    console.error(`Error uploading image to ${bucket}:`, error);
    return null;
  }
};

export const getImageUrl = (path: string, bucket: string) => {
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
};
