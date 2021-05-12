package com.beehra;

import android.os.Bundle;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // initialize Fresco before setting view.
    Fresco.initialize(this);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BeeHR";
  }
}
