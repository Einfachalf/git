import { HfInference } from '@huggingface/inference'

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY)

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { input } = await req.json()

    const response = await Hf.textToImage({
      inputs: input,
      model: 'stabilityai/stable-diffusion-2',

      parameters: {
        negative_prompt: 'blurry',
      },
    })

    return new Response(response, {
      headers: { 'content-type': 'image/jpeg' },
    })
  } catch (error) {
    console.log(error)
  }
}
