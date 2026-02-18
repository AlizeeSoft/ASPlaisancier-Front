//
//  AppConfig.swift
//  ASPlaisancier
//
//  Created by Diogo Cardoso on 18/02/2026.
//

import Foundation
import React

@objc(AppConfig)
class AppConfig: NSObject, RCTBridgeModule {

  static func moduleName() -> String! {
    return "AppConfig"
  }

  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "ID_PO": Bundle.main.object(forInfoDictionaryKey: "ID_PO") as? String ?? ""
    ]
  }
}


