import * as tf from '@tensorflow/tfjs';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Compile the model
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Generate some synthetic data for training
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    // Train the model
    await model.fit(xs, ys, { epochs: 250 });

    // Use the model to do inference
    const output = model.predict(tf.tensor2d([10], [1, 1]));

    return Response.json({
      output: output.toString(),
    })
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}