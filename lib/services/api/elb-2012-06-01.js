/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'query',
  apiVersion: '2012-06-01',
  endpointPrefix: 'elasticloadbalancing',
  resultWrapped: true,
  serviceFullName: 'Elastic Load Balancing',
  signatureVersion: 'v2',
  timestampFormat: 'iso8601',
  operations: {
    applySecurityGroupsToLoadBalancer: {
      name: 'ApplySecurityGroupsToLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          SecurityGroups: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SecurityGroups: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    attachLoadBalancerToSubnets: {
      name: 'AttachLoadBalancerToSubnets',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Subnets: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Subnets: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    configureHealthCheck: {
      name: 'ConfigureHealthCheck',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          HealthCheck: {
            type: 'structure',
            members: {
              Target: {
                required: true
              },
              Interval: {
                type: 'integer',
                required: true
              },
              Timeout: {
                type: 'integer',
                required: true
              },
              UnhealthyThreshold: {
                type: 'integer',
                required: true
              },
              HealthyThreshold: {
                type: 'integer',
                required: true
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          HealthCheck: {
            type: 'structure',
            members: {
              Target: {
              },
              Interval: {
                type: 'integer'
              },
              Timeout: {
                type: 'integer'
              },
              UnhealthyThreshold: {
                type: 'integer'
              },
              HealthyThreshold: {
                type: 'integer'
              }
            }
          }
        }
      }
    },
    createAppCookieStickinessPolicy: {
      name: 'CreateAppCookieStickinessPolicy',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          PolicyName: {
            required: true
          },
          CookieName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createLBCookieStickinessPolicy: {
      name: 'CreateLBCookieStickinessPolicy',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          PolicyName: {
            required: true
          },
          CookieExpirationPeriod: {
            type: 'integer'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createLoadBalancer: {
      name: 'CreateLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Listeners: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Protocol: {
                  required: true
                },
                LoadBalancerPort: {
                  type: 'integer',
                  required: true
                },
                InstanceProtocol: {
                },
                InstancePort: {
                  type: 'integer',
                  required: true
                },
                SSLCertificateId: {
                }
              }
            },
            required: true
          },
          AvailabilityZones: {
            type: 'list',
            members: {
            }
          },
          Subnets: {
            type: 'list',
            members: {
            }
          },
          SecurityGroups: {
            type: 'list',
            members: {
            }
          },
          Scheme: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          DNSName: {
          }
        }
      }
    },
    createLoadBalancerListeners: {
      name: 'CreateLoadBalancerListeners',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Listeners: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                Protocol: {
                  required: true
                },
                LoadBalancerPort: {
                  type: 'integer',
                  required: true
                },
                InstanceProtocol: {
                },
                InstancePort: {
                  type: 'integer',
                  required: true
                },
                SSLCertificateId: {
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    createLoadBalancerPolicy: {
      name: 'CreateLoadBalancerPolicy',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          PolicyName: {
            required: true
          },
          PolicyTypeName: {
            required: true
          },
          PolicyAttributes: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                AttributeName: {
                },
                AttributeValue: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteLoadBalancer: {
      name: 'DeleteLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteLoadBalancerListeners: {
      name: 'DeleteLoadBalancerListeners',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          LoadBalancerPorts: {
            type: 'list',
            members: {
              type: 'integer'
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteLoadBalancerPolicy: {
      name: 'DeleteLoadBalancerPolicy',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          PolicyName: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deregisterInstancesFromLoadBalancer: {
      name: 'DeregisterInstancesFromLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                }
              }
            }
          }
        }
      }
    },
    describeInstanceHealth: {
      name: 'DescribeInstanceHealth',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                }
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          InstanceStates: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                },
                State: {
                },
                ReasonCode: {
                },
                Description: {
                }
              }
            }
          }
        }
      }
    },
    describeLoadBalancerPolicies: {
      name: 'DescribeLoadBalancerPolicies',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
          },
          PolicyNames: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          PolicyDescriptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                PolicyName: {
                },
                PolicyTypeName: {
                },
                PolicyAttributeDescriptions: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeValue: {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeLoadBalancerPolicyTypes: {
      name: 'DescribeLoadBalancerPolicyTypes',
      input: {
        type: 'structure',
        members: {
          PolicyTypeNames: {
            type: 'list',
            members: {
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          PolicyTypeDescriptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                PolicyTypeName: {
                },
                Description: {
                },
                PolicyAttributeTypeDescriptions: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      AttributeName: {
                      },
                      AttributeType: {
                      },
                      Description: {
                      },
                      DefaultValue: {
                      },
                      Cardinality: {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    describeLoadBalancers: {
      name: 'DescribeLoadBalancers',
      input: {
        type: 'structure',
        members: {
          LoadBalancerNames: {
            type: 'list',
            members: {
            }
          },
          Marker: {
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          LoadBalancerDescriptions: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                LoadBalancerName: {
                },
                DNSName: {
                },
                CanonicalHostedZoneName: {
                },
                CanonicalHostedZoneNameID: {
                },
                ListenerDescriptions: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      Listener: {
                        type: 'structure',
                        members: {
                          Protocol: {
                          },
                          LoadBalancerPort: {
                            type: 'integer'
                          },
                          InstanceProtocol: {
                          },
                          InstancePort: {
                            type: 'integer'
                          },
                          SSLCertificateId: {
                          }
                        }
                      },
                      PolicyNames: {
                        type: 'list',
                        members: {
                        }
                      }
                    }
                  }
                },
                Policies: {
                  type: 'structure',
                  members: {
                    AppCookieStickinessPolicies: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          PolicyName: {
                          },
                          CookieName: {
                          }
                        }
                      }
                    },
                    LBCookieStickinessPolicies: {
                      type: 'list',
                      members: {
                        type: 'structure',
                        members: {
                          PolicyName: {
                          },
                          CookieExpirationPeriod: {
                            type: 'integer'
                          }
                        }
                      }
                    },
                    OtherPolicies: {
                      type: 'list',
                      members: {
                      }
                    }
                  }
                },
                BackendServerDescriptions: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      InstancePort: {
                        type: 'integer'
                      },
                      PolicyNames: {
                        type: 'list',
                        members: {
                        }
                      }
                    }
                  }
                },
                AvailabilityZones: {
                  type: 'list',
                  members: {
                  }
                },
                Subnets: {
                  type: 'list',
                  members: {
                  }
                },
                VPCId: {
                },
                Instances: {
                  type: 'list',
                  members: {
                    type: 'structure',
                    members: {
                      InstanceId: {
                      }
                    }
                  }
                },
                HealthCheck: {
                  type: 'structure',
                  members: {
                    Target: {
                    },
                    Interval: {
                      type: 'integer'
                    },
                    Timeout: {
                      type: 'integer'
                    },
                    UnhealthyThreshold: {
                      type: 'integer'
                    },
                    HealthyThreshold: {
                      type: 'integer'
                    }
                  }
                },
                SourceSecurityGroup: {
                  type: 'structure',
                  members: {
                    OwnerAlias: {
                    },
                    GroupName: {
                    }
                  }
                },
                SecurityGroups: {
                  type: 'list',
                  members: {
                  }
                },
                CreatedTime: {
                  type: 'timestamp'
                },
                Scheme: {
                }
              }
            }
          },
          NextMarker: {
          }
        }
      }
    },
    detachLoadBalancerFromSubnets: {
      name: 'DetachLoadBalancerFromSubnets',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Subnets: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Subnets: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    disableAvailabilityZonesForLoadBalancer: {
      name: 'DisableAvailabilityZonesForLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          AvailabilityZones: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          AvailabilityZones: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    enableAvailabilityZonesForLoadBalancer: {
      name: 'EnableAvailabilityZonesForLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          AvailabilityZones: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          AvailabilityZones: {
            type: 'list',
            members: {
            }
          }
        }
      }
    },
    registerInstancesWithLoadBalancer: {
      name: 'RegisterInstancesWithLoadBalancer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                }
              }
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          Instances: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                InstanceId: {
                }
              }
            }
          }
        }
      }
    },
    setLoadBalancerListenerSSLCertificate: {
      name: 'SetLoadBalancerListenerSSLCertificate',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          LoadBalancerPort: {
            type: 'integer',
            required: true
          },
          SSLCertificateId: {
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    setLoadBalancerPoliciesForBackendServer: {
      name: 'SetLoadBalancerPoliciesForBackendServer',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          InstancePort: {
            type: 'integer',
            required: true
          },
          PolicyNames: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    setLoadBalancerPoliciesOfListener: {
      name: 'SetLoadBalancerPoliciesOfListener',
      input: {
        type: 'structure',
        members: {
          LoadBalancerName: {
            required: true
          },
          LoadBalancerPort: {
            type: 'integer',
            required: true
          },
          PolicyNames: {
            type: 'list',
            members: {
            },
            required: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    }
  },
  pagination: {
    describeInstanceHealth: {
      resultKey: 'InstanceStates'
    },
    describeLoadBalancerPolicies: {
      resultKey: 'PolicyDescriptions'
    },
    describeLoadBalancerPolicyTypes: {
      resultKey: 'PolicyTypeDescriptions'
    },
    describeLoadBalancers: {
      inputToken: 'Marker',
      outputToken: 'NextMarker',
      resultKey: 'LoadBalancerDescriptions'
    }
  }
};
