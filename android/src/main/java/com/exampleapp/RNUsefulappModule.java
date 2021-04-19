
package com.exampleapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNUsefulappModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNUsefulappModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNUsefulapp";
  }
}